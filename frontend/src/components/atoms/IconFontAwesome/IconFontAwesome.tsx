import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
    icon: IconDefinition;
    color?: string;
}

export function IconFontAwesome({ icon, color }: IProps) {
    return <FontAwesomeIcon icon={icon} size={'2x'} color={color || '#000'} />;
}
