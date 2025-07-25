import { ThemeConfig } from "antd/es/config-provider";

const antdThemeConfig: ThemeConfig = {
    token: {
        fontFamily: "Nunito",
        colorPrimary: "#597ef7",
    },
    components: {
        Button: {
            defaultShadow: "none",
            primaryShadow: "none",
        },
        Tooltip: {
            colorBgSpotlight: "rgba(0, 0, 0, 0.75)",
            boxShadowSecondary: "none",
            boxShadow: "none",
        },
    },
};

export default antdThemeConfig;
