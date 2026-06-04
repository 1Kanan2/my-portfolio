import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';
import { ASSETS } from '../../../utils/constants';
import { downloadFile } from '../../../utils/helpers';
import './DownloadButton.css';

const DownloadButton = ({
                            label = "CV",
                            fileUrl,
                            fileName
                        }) => {
    const { i18n } = useTranslation();
    
    // Seleccionar CV según idioma actual
    const currentLang = i18n.language.split('-')[0];
    const cvPath = fileUrl || (currentLang === 'en' ? ASSETS.CV_EN : ASSETS.CV_ES);
    const cvName = fileName || (currentLang === 'en' ? ASSETS.CV_NAME_EN : ASSETS.CV_NAME_ES);

    const handleDownload = () => downloadFile(cvPath, cvName);

    return (
        <button
            type="button"
            className="btn-cv"
            onClick={handleDownload}
            aria-label={`Descargar ${label}`}
        >
            <FileText size={18} className="btn-icon" />
            <span>{label}</span>
        </button>
    );
};

export default DownloadButton;