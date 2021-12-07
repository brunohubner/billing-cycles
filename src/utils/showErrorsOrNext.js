import { toast } from 'react-toastify'
import toastConfig from './toastConfig';

export default function showErrorsOrNext(resp, next) {
    if (!resp.errors) return next()
    for (const error of resp.errors) {
        toast.error(error, {
            ...toastConfig
        });
    }
    return
}
