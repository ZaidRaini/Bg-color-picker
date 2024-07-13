import { AppError, CustomError } from '@/Common/interface';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const useCustomError = () => {
  const handleError = (error: AppError) => {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError<CustomError>;
      if (axiosError.response) {
        const statusCode = axiosError.response.status;
        switch (statusCode) {
          case 400:
            console.error('Bad Request Error:', axiosError.response.data);
            toast.error(axiosError.response.data.message || 'Bad Request', {
              toastId: 'bedrequesterror',
            });
            break;
          case 401:
            toast.error('Unauthorized Please Login Again to Continue', {
              toastId: 'unauthorizedError',
            });
            //Todo Logout or refresh token logic for unauthorized user
            console.error('Unauthorized Error:', axiosError.response.data);
            break;
          case 404:
            toast.error(axiosError.response.data?.message, {
              toastId: 'badRequest',
            });
            console.error('Not Found Error:', axiosError.response.data);

            break;
          case 409:
            toast.error(axiosError.response.data?.message, {
              toastId: 'conflictRequest',
            });
            console.error('Not Found Error:', axiosError.response.data);
            break;
          case 500:
            toast.error(
              axiosError.response.data.message || 'Internal Server Error',
              {
                toastId: 'internalServererror',
              },
            );
            console.error('Not Found Error:', axiosError.response.data);
            break;
          default:
            console.error('axiosError Status Code:', axiosError.response);
            toast.error(
              `${axiosError.response?.status} : ${axiosError.response?.data?.message}` ||
                'Unhandled Status Code',
              {
                toastId: 'nostatusCodeFound',
              },
            );
            break;
        }
      } else if (axiosError.request) {
        console.error('No response received:', axiosError.request);
        toast.error(axiosError.request || 'No response received', {
          toastId: 'NoResponseRecievied',
        });
      } else {
        console.error('Error:', axiosError.message);
      }
    } else {
      console.error('Unknown Error:', error.message);
    }
  };

  // Type guard to check if the error is an AxiosError
  const isAxiosError = (error: AppError): error is AxiosError<CustomError> => {
    return 'isAxiosError' in error && error.isAxiosError === true;
  };

  return {
    handleError,
  };
};
