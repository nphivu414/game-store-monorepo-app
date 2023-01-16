import { ToastContainer, toast, ToastContent, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type ToastParams = {
  content: ToastContent;
  options?: ToastOptions;
};

const defaultToastOptions: ToastOptions = {
  position: 'bottom-right',
};

export const toastError = (params: ToastParams) => {
  toast.error(params.content, {
    ...defaultToastOptions,
    ...params.options,
  });
};

export const toastSuccess = (params: ToastParams) => {
  toast.success(params.content, {
    ...defaultToastOptions,
    ...params.options,
  });
};

export const toastInfo = (params: ToastParams) => {
  toast.info(params.content, {
    ...defaultToastOptions,
    ...params.options,
  });
};

export const toastWarn = (params: ToastParams) => {
  toast.warn(params.content, {
    ...defaultToastOptions,
    ...params.options,
  });
};

export const ToastifyContainer = () => {
  return <ToastContainer />;
};
