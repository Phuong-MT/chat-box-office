import {
    VideoIcons,
    HomeIcons,
    MarkIcons,
    GroupIcons,
    GameIcons,
    LogoIcons,
    MenuIcons,
    ChatMesseger,
    NotificateIcons,
    SreachIcons,
} from "@/assets/icons/header/iconsCustoms";

import "./index.scss";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Tabs from "antd/es/button";
function Header() {
    const [form] = Form.useForm();
    return (
        <div className="container-header">
            <div className="search-header">
                <LogoIcons style={{ height: "100%" }}></LogoIcons>
                <Form className="form-sreach" form={form}>
                    <Form.Item
                        name="code"
                        rules={[
                            {
                                required: true,
                                message: "Please enter class code.",
                            },
                        ]}
                    >
                        <Input
                            autoComplete="off"
                            placeholder="search on chat box"
                            className="search-input"
                            prefix={<SreachIcons style={{ height: 16 }} />}
                        />
                    </Form.Item>
                </Form>
            </div>
            <div className="tab-header">
                <Tabs className="container-icons-tab-header">
                    <HomeIcons className="icons-tab-header"></HomeIcons>
                </Tabs>
                <Tabs className="container-icons-tab-header">
                    <VideoIcons className="icons-tab-header"></VideoIcons>
                </Tabs>
                <Tabs className="container-icons-tab-header">
                    <MarkIcons className="icons-tab-header"></MarkIcons>
                </Tabs>
                <Tabs className="container-icons-tab-header">
                    <GroupIcons className="icons-tab-header"></GroupIcons>
                </Tabs>
                <Tabs className="container-icons-tab-header">
                    <GameIcons className="icons-tab-header"></GameIcons>
                </Tabs>
            </div>
            <div className="account-active">
                <div className="container-icons-account-active">
                    <MenuIcons className="icons-account-active"></MenuIcons>
                </div>
                <div className="container-icons-account-active">
                    <ChatMesseger className="icons-account-active"></ChatMesseger>
                </div>
                <div className="container-icons-account-active">
                    <NotificateIcons className="icons-account-active"></NotificateIcons>
                </div>

                {/* sau se sua thanh avatar */}
                <div className="container-icons-account-active">
                    <NotificateIcons className="icons-account-active"></NotificateIcons>
                </div>
            </div>
        </div>
    );
}
export default Header;
