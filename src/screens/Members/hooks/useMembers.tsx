import { PropsWithChildren, createContext, useContext, useMemo, useState } from "react";
import { AsyncStatus } from "@utils";
import { loadMembers } from "src/services/firebase/firestore";

interface MembersContextProps {
    member?: Member;
    members: Member[];
    status: AsyncStatus;
    canGoBack: boolean;
    canGoNext: boolean;
    fetch(): Promise<void>;
    filter(value: string): void;
    selectMember(index: number): void;
    goBack(): void;
    goNext(): void;
};


const MembersContext = createContext<MembersContextProps | undefined>(undefined);

function MembersProvider({ children }: PropsWithChildren) {
    const [index, setIndex] = useState(0);
    const [member, setMember] = useState<Member>();
    const [list, setList] = useState<Member[]>([]);
    const [filteredList, setFilteredList] = useState<Member[]>([]);
    const [status, setStatus] = useState(AsyncStatus.initial);
    const canGoBack = index > 0;
    const canGoNext = index < list.length - 1;

    async function fetch() {
        setStatus(AsyncStatus.loading);
        try {
            const result = await loadMembers();
            setList(result);
            setFilteredList(result);
            setStatus(AsyncStatus.success);
        } catch (error) {
            console.error(error);
            setStatus(AsyncStatus.error);
        }
    }

    function filter(value: string) {
        const filtered = list.filter(member => member.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredList(filtered);
    }

    function selectMember(index: number) {
        setIndex(index);
        setMember(list[index]);
    }
    function goBack() {
        selectMember(index - 1);
    }
    function goNext() {
        selectMember(index + 1);
    }


    const value = useMemo(() => {
        return {
            member,
            members: filteredList,
            status,
            canGoBack,
            canGoNext,
            fetch,
            filter,
            selectMember,
            goBack,
            goNext,
        };
    }, [member, filteredList, status, canGoBack, canGoNext, fetch, filter, selectMember, goBack, goNext,]);


    return (
        <MembersContext.Provider value={value}>
            {children}
        </MembersContext.Provider>
    );
}

function useMembers() {
    const context = useContext(MembersContext);
    if (context === undefined) {
        throw new Error('useMembers must be used within a MembersProvider');
    }
    return context;
}

export { MembersProvider, useMembers };

