

function Card({props}) {
  return (
    <div class="card">
  <img src={props.image} class="card-img-top" alt={props.alt}/>
<div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <button class="btn btn-primary">Go somewhere</button>
  </div>
</div>
  );
}

export default Card;
