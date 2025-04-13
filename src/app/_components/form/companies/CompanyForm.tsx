'use client';

import React from 'react';

type Props = {
    mode: 'create' | 'edit';
    companyId?: string;
};

export default function CompanyForm({ mode, companyId }: Props) {
    return (
        <div className='p-4 border rounded shadow max-w-md mx-auto mt-10'>
            <h1 className='text-xl font-bold mb-4'>
                {mode === 'create'
                    ? 'Cadastrar Empresa'
                    : `Editar Empresa #${companyId}`}
            </h1>
            {/* Simulação de formulário */}
            <form className='space-y-4'>
                <input
                    type='text'
                    placeholder='Nome da Empresa'
                    className='w-full border p-2 rounded'
                />
                <button
                    type='submit'
                    className='px-4 py-2 bg-blue-600 text-white rounded'
                >
                    {mode === 'create' ? 'Criar' : 'Salvar Alterações'}
                </button>
            </form>
        </div>
    );
}
