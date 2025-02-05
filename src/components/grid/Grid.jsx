import { Card } from "../card/Card";

export function Grid() {
    return (
        <div className="catalog__grid">
            <Card imgSrc="/img/img-1.webp" price="100" title="Title" weight="100" />
            <Card imgSrc="/img/img-1.webp" price="100" title="Title" weight="100" />
            <Card imgSrc="/img/img-1.webp" price="100" title="Title" weight="100" />
            <Card imgSrc="/img/img-1.webp" price="100" title="Title" weight="100" />
        </div>
    );
}