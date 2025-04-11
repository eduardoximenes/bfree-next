'use client';

import { useParams } from 'next/navigation';
import CompanyForm from '@/components/form/company/CompanyForm';

export default function EditCompanyPage() {
    const { id } = useParams();

    return <CompanyForm mode='edit' companyId={id as string} />;
}
