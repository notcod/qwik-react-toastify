import { $, component$, useOnWindow, useSignal, useStyles$ } from "@builder.io/qwik";
import { ToastContainerProps, ToastContainer as ToastContainerReact } from "react-toastify";
import styles from "react-toastify/dist/ReactToastify.css?inline";
import { qwikify$ } from "@builder.io/qwik-react";

const Container = qwikify$<ToastContainerProps>(ToastContainerReact, { clientOnly: true });
export const ToastContainer = component$<ToastContainerProps>((props) => {
    useStyles$(styles);
    const visible = useSignal<boolean>(false);
    useOnWindow(
        "DOMContentLoaded",
        $(() => (visible.value = true))
    );
    return visible.value && <Container {...props} />;
});
