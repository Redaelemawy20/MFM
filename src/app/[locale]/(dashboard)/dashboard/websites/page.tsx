'use client';
import { websites } from '@/components/builder/TempData';
import WebsiteCard from '@/components/builder/WebsiteCard';
import {
  Button,
  ModalContent,
  Modal,
  ModalHeader,
  Spinner,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import WebsiteForm from '@/components/dashboard/forms/dashboard-controls/WebsiteForm';
import {
  useCreateWebsite,
  useGetMyWebsites,
} from '@/hooks/queries/useWebsites';
export default function WebsitesPage() {
  const t = useTranslations('dashboard');
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [successMessage, setSuccessMessage] = useState<string | undefined>();
  const { mutateAsync: stroreWebsite, isPending } = useCreateWebsite();
  const { data: websites, isLoading } = useGetMyWebsites();
  const createWebsite = async (formData: FormData) => {
    try {
      // Reset messages before submission
      setErrorMessage(undefined);
      setSuccessMessage(undefined);

      await stroreWebsite(formData);
      // Set success message after successful submission
      setSuccessMessage(t('websiteCreatedSuccessfully'));
    } catch (error) {
      console.log(error);
      // Set error message if submission fails
      setErrorMessage(t('websiteCreationFailed'));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{t('websitesTitle')}</h1>
      <p className="text-sm text-gray-500">{t('websitesDescription')}</p>
      <div className="flex justify-end">
        <Button onClick={() => setIsOpen(true)}>{t('addWebsite')}</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto">
        {isLoading ? (
          <Spinner />
        ) : (
          websites.map((website: Website) => (
            <WebsiteCard key={website.id} website={website} />
          ))
        )}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="5xl">
        <ModalContent>
          <ModalHeader>{t('addWebsite')}</ModalHeader>
          <WebsiteForm
            action={createWebsite}
            clearOnSubmit
            isPending={isPending}
            errorMessage={errorMessage}
            successMessage={successMessage}
          />
        </ModalContent>
      </Modal>
    </div>
  );
}
