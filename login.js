/* ======================================================================
  www.erickouassi.com
====================================================================== */
//
async function getUsers() {
    let url = 'https://opensheet.vercel.app/1bPSlQGENmSJNMpJbDpq-lrcvgY0Ah5_Cu9zTmmtmCZg/Data+2021';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {
    let users = await getUsers();
    // console.log(users)
    const user = users;
    //console.log(user)
  //
  	var user_id = document.getElementById('username').value

	for(var i = 0; i < user.length; i++) {
		// check is user input matches user_id of a current index of the user array
		if(user_id == user[i].user_id ) { 
			//console.log(user_id + " is logged in!!!")
     // alert("Successfully login!");
      document.getElementById("errors").style.display = "none";
      document.getElementById("formDisplay").style.display = "none";
//
    const result = user.find( ({ user_id }) => user_id === user[i].user_id );
     // console.log(result)
    let html = '';
   
        let htmlSegment = `<div class="user">
        <img src="${result.profileURL}" >
        <h2>${result.name}</h2>
        <p> User ID: ${result.user_id}</p>
        <p>Total: <strong>${result.total}</strong> Fcfa</p>
<div>
<table>
  <caption>Récapitulatif des montants MENSUELS en FCFA)</caption>
  <thead>
    <tr>
      <th scope="col">Janvier</th>
      <th scope="col">Février</th>
      <th scope="col">Mars</th>
      <th scope="col">Avril</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Janvier"> ${result.jan}</td>
      <td data-label="Février"> ${result.feb}</td>
      <td data-label="Mars"> ${result.mar}</td>
      <td data-label="Avril"> ${result.apr}</td>
    </tr>
  </tbody>
</table>
<table>
  <thead>
    <tr>
      <th scope="col">Mai</th>
      <th scope="col">Juin</th>
      <th scope="col">Juillet</th>
      <th scope="col">Août</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Mai"> ${result.may}</td>
      <td data-label="Juin"> ${result.jun}</td>
      <td data-label="Juillet"> ${result.jul}</td>
      <td data-label="Août"> ${result.aug}</td>
    </tr>
  </tbody>
</table>
<table>
  <thead>
    <tr>
      <th scope="col">Septembre</th>
      <th scope="col">Octobre</th>
      <th scope="col">Novembre</th>
      <th scope="col">Décembre</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Septembre"> ${result.sep}</td>
      <td data-label="Octobre"> ${result.oct}</td>
      <td data-label="Novembre"> ${result.nov}</td>
      <td data-label="Décembre"> ${result.dec}</td>
    </tr>
  </tbody>
</table>
</div>
<table>
  <caption>Récapitulatif des montants EXCEPTIONNELLES en FCFA</caption>
  <thead>
    <tr>
      <th scope="col">Exceptionnelle 1</th>
      <th scope="col">Exceptionnelle 2</th>
      <th scope="col">Exceptionnelle 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Exceptionnelle 1"> ${result.ex1}</td>
      <td data-label="Exceptionnelle 2"> ${result.ex2}</td>
      <td data-label="Exceptionnelle 3"> ${result.ex3}</td>
    </tr>
  </tbody>
</table>
<table>
  <thead>
    <tr>
      <th scope="col">Exceptionnelle 4</th>
      <th scope="col">Exceptionnelle 5</th>
      <th scope="col">Exceptionnelle 6</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Exceptionnelle 1"> ${result.ex4}</td>
      <td data-label="Exceptionnelle 1"> ${result.ex5}</td>
      <td data-label="Exceptionnelle 1"> ${result.ex6}</td>
    </tr>
  </tbody>
</table>

</div>`;

        html += htmlSegment;

    let container = document.querySelector('.container');
    container.innerHTML = html;
			// stop the function if this is found to be true
			return
		}
	}
  let msgErrors = document.querySelector('#errors');
  msgErrors.innerHTML = "<span style='color:red'>Cet identifiant n'est pas valide</span>";
	//console.log("incorrect username or password")
}
  renderUsers();
