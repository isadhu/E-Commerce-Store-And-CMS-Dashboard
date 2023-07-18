'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { useStoreModal } from '@/hooks/use-store-modal';
import { Button } from '@/components/ui/button';
import { Modal } from '../ui/modal';

export const StoreModal = () => {
	const storeModal = useStoreModal();

	return (
		<Modal
			title='Create Store'
			description='Add a new store to manage product and categories'
			isOpen={storeModal.isOpen}
			onClose={storeModal.onClose}>
			Future
		</Modal>
	);
};
