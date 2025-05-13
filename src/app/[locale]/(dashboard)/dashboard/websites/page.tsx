'use client';
import { websites } from '@/components/builder/TempData';
import WebsiteCard from '@/components/builder/WebsiteCard';
import { Button, ModalContent, Modal, ModalHeader } from '@nextui-org/react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import WebsiteForm from '@/components/dashboard/forms/dashboard-controls/WebsiteForm';
export default function WebsitesPage() {
  const t = useTranslations('dashboard');
  const [isOpen, setIsOpen] = useState(false);
  const createWebsite = (formData: FormData) => {
    const data = JSON.parse(formData.get('data') as string);
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{t('websitesTitle')}</h1>
      <p className="text-sm text-gray-500">{t('websitesDescription')}</p>
      <div className="flex justify-end">
        <Button onClick={() => setIsOpen(true)}>{t('addWebsite')}</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {websites.map((website) => (
          <WebsiteCard key={website.id} website={website} />
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="5xl">
        <ModalContent>
          <ModalHeader>{t('addWebsite')}</ModalHeader>
          <WebsiteForm action={createWebsite} />
        </ModalContent>
      </Modal>
    </div>
  );
}
