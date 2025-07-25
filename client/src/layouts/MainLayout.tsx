import antdThemeConfig from "@/themes/antd-theme.config";
import ConfigProvider from "antd/es/config-provider";
import { LayoutProvider } from "@/provider/LayoutProvider";
import React from "react";
import { shallowEqual } from "react-redux";
import Header from "./header";
import Sidebar from "./sidebar";

interface MainLayoutProps {
    scrollableContent?: boolean;
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    scrollableContent = true,
}) => {
    return (
        <ConfigProvider theme={antdThemeConfig}>
            <LayoutProvider>
                <div
                    style={{
                        display: "flex",
                        height: "100dvh",
                        overflow: "hidden",
                    }}
                >
                    <Sidebar />

                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            overflow: scrollableContent ? "auto" : "hidden",
                        }}
                    >
                        <Header />
                        <div
                            style={{
                                flex: 1,
                                overflow: scrollableContent ? "auto" : "hidden",
                            }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </LayoutProvider>
        </ConfigProvider>
    );
};

export default MainLayout;
