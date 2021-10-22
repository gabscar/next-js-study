import Link from 'next/link';
import style from './event-item.module.css';
import Button from '../ui/button';
import ArrowRightIcon from '../icons/arrow-rigth-icon';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
function EventItem(props) {

  const {title,image,date,location,id}= props;
  const FormatedDate = new Date(date).toLocaleDateString('en-US',{
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formattedAddress = location.replace(' ,','\n');
  const exploreLink = `/events/${id}`

  return(
    <li className={style.item}>
      <img src={'/' + image} alt={title} />
      <div className={style.content}> 
        <div className={style.summary}>
          <h2>{title}</h2>
          <div className={style.date}>
            <DateIcon />
            <time>{FormatedDate}</time>
          </div>
          <div className={style.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={style.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={style.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}


export default EventItem;