import constants from './constants';

export async function login(email, password){  

	return fetch(constants.baseurl+'login/teacher', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncoded({          	
        	email: email,
        	password: password
        })
    })
    .then((response) => {
        return response
    })
    .catch((error) => {
    	throw error;
  	});
};

export async function studentKelas(token){  
	return fetch(constants.baseurl+'kelas/siswa', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer '+token
        }
    })
    .then((response) => {
        return response
    })
    .catch((error) => {
    	throw error;
  	});
};

export async function allKelas(token){
    return fetch(constants.baseurl+'kelas', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer '+token
        }
    })
    .then((response) => {
        return response
    })
    .catch((error) => {
    	throw error;
  	});
}

export async function attendanceCheckIn(token){
    return fetch(constants.baseurl+'absen/checkin', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer '+token
        }
    })
    .then((response) => {
        return response
    })
    .catch((error) => {
    	throw error;
  	});
}

export async function attendanceCheckOut(token){
    return fetch(constants.baseurl+'absen/checkout', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer '+token
        }
    })
    .then((response) => {
        return response
    })
    .catch((error) => {
    	throw error;
  	});
}

export async function bulletinNews(token){
    return fetch(constants.baseurl+'bulletin/news', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer '+token
        }
    })
    .then((response) => {
        return response
    })
    .catch((error) => {
    	throw error;
  	});
}

export async function bulletinBlog(token){
    return fetch(constants.baseurl+'bulletin/blog', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer '+token
        }
    })
    .then((response) => {
        return response
    })
    .catch((error) => {
    	throw error;
  	});
}

export async function userDetail (token){
    return fetch(constants.baseurl+'user', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer '+token
        }
    }).then((res) => {
        return res
    }).catch((err) => {
        throw err;
    })
}

const urlEncoded = (formData)=>{
    return Object.keys(formData).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key])).join('&');
}