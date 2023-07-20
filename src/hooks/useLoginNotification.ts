// hooks/useLoginNotification.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

const useLoginNotification = () => {
	const router = useRouter();

	useEffect(() => {
		if (router.query.login === 'success') {
			toast.success(`You are logged in`, {
				style: {
					border: '2px solid black',
					borderRadius: '0',
				},
				position: 'top-center',
			});
		}
	}, [router.query.login]);
};

export default useLoginNotification;
