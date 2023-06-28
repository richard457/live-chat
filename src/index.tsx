import LiveChat from './components/livechat/LiveChat';
import r2wc from "@r2wc/react-to-web-component";

// REF:https://github.com/bitovi/react-to-web-component

const WrappedLiveChat = r2wc(LiveChat, { props: { configs: "json" } });
customElements.define("flipper-livechat", WrappedLiveChat);
