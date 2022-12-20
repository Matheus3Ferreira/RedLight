import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import './styles.css';

interface IProps {
    readOnly?: boolean;
    defaultValue?: number;
}

export function RatingStars({ readOnly = false, defaultValue }: IProps) {
    return (
        <Rating
            name="read-only"
            defaultValue={defaultValue ? defaultValue : 5}
            readOnly={readOnly}
            precision={0.5}
            icon={<StarIcon className="full-rating-star" fontSize="large" />}
            emptyIcon={<StarIcon fontSize="large" />}
        />
    );
}
