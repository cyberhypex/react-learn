const today=new Date();

function formateDate(date){
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
      ).format(date);
}

export default function DateToday(){
    return(
        <h1>Today is {formateDate(today)}</h1>
    )
}