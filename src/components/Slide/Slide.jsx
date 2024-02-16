import classes from './Slide.module.css';

// Компонент возвращает слайд
export default function Slide ({slide}) {
    return (
    <section className=''>
        <img className={classes['slide-img']} src={`../../../src/img/sliderimg/${slide.image}`} />
        <div className={classes['image-title']}>
            <h5>{slide.title}</h5>
        </div>

    </section>
    )
}