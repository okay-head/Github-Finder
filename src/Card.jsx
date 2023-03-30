export default function Card({props}) {
  return(
    <div className="card" onClick={()=>{window.open(`${props.html_url}`,'_blank')}}>

    <div className="row1 row">
      <img src="./../assets/Screenshot 2023-03-24 183607.png" alt="profile image" />
      <h3>{props.name || 'Name'}</h3>
      <h4 className="gray">@{props.login || 'Username'}</h4>
      <h5 className="light">{props.location || 'Location'}</h5>
      <p id="card-bio">{props.bio || 'No bio available'}</p>
    </div>

    <div className="row2 row">
      <div>
        <p className="light">Repos</p>
        <p>{props.public_repos || 0}</p>
      </div>
      <div>
        <p className="light">Followers</p>
        <p>{props.followers || 0}</p>
      </div>
      <div>
        <p className="light">Following</p>
        <p>{props.following || 0}</p>
      </div>
    </div>
  </div>
  )
}
   
