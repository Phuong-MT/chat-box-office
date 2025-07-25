import { createContext, FC, ReactNode, useContext, useState } from "react";

interface ILayoutContext {
    isSidebarOpen: boolean;
    onSidebarOpenChange: (open: boolean) => void;
}

const LayoutContext = createContext<ILayoutContext | undefined>(undefined);

const LayoutProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const onSidebarOpenChange = (open: boolean) => {
        setIsSidebarOpen(open);
    };

    return (
        <LayoutContext.Provider value={{ isSidebarOpen, onSidebarOpenChange }}>
            {children}
        </LayoutContext.Provider>
    );
};

const useLayoutContext = (): ILayoutContext => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error("useLayoutContext must be used within a LayoutProvider");
    }
    return context;
};

export { LayoutProvider, useLayoutContext, LayoutContext };
