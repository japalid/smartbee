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

export async function bulletinNewsId(token,id){
    return fetch(constants.baseurl+'bulletin/news/'+id, {
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

export async function bulletinBlogId(token,id){
    return fetch(constants.baseurl+'bulletin/blog/'+id, {
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

export async function bulletinEvent(token){
    return fetch(constants.baseurl+'bulletin/event', {
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

export async function bulletinEventId(token,id){
    return fetch(constants.baseurl+'bulletin/event/'+id, {
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

export async function bulletinTips(token){
    return fetch(constants.baseurl+'bulletin/tips', {
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

export async function bulletinTipsId(token,id){
    return fetch(constants.baseurl+'bulletin/tips/'+id, {
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


/*-- Activity --*/
export async function activity_daily(token, siswa, date, language){  

	return fetch(constants.baseurl+'activity/daily', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer '+token
        },
        body: urlEncoded({          	
        	siswa: siswa,
            date: date,
            language: language
        })
    })
    .then((response) => {
        return response
    })
    .catch((error) => {
    	throw error;
  	});
};

export async function activity_category(token){  

	return fetch(constants.baseurl+'activity/categories', {
        method: 'GET',
        headers: {
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

export async function activity_category_id(token,id){  

	return fetch(constants.baseurl+'activity/categories/'+id, {
        method: 'GET',
        headers: {
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

export async function activity_food_list(token){  

	return fetch(constants.baseurl+'activity/food', {
        method: 'GET',
        headers: {
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

export async function activity_subject_list(token){  

	return fetch(constants.baseurl+'activity/subject', {
        method: 'GET',
        headers: {
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

export async function activity_report(token, siswa, id, date, language){  

	return fetch(constants.baseurl+'activity/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer '+token
        },
        body: urlEncoded({          	
            siswa: siswa,
            id_activity: id,
            date: date,
            language: language
        })
    })
    .then((response) => {
        return response
    })
    .catch((error) => {
    	throw error;
  	});
};

export async function activity_report_range(token, siswa, id, date1, date2, language){  

	return fetch(constants.baseurl+'activity/report/range', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer '+token
        },
        body: urlEncoded({          	
            id: siswa,
            id_activity: id,
            start: date1,
            end: date2,
            language: language
        })
    })
    .then((response) => {
        return response
    })
    .catch((error) => {
    	throw error;
  	});
};

export async function activity_upload_academic(token, file, siswa, language, id_detail_activity, time_activity, note, id_mapel, nilai_mapel, isDraft){  

	return fetch(constants.baseurl+'activity/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer '+token
        },
        body: urlEncoded({          	
            siswa: siswa,
            language: language,
            id_detail_activity: id_detail_activity,
            time_activity: time_activity,
            note: note,
            id_mapel: id_mapel,
            nilai_mapel: nilai_mapel,
            isDraft: isDraft
        })
    })
    .then((response) => {
        return response
    })
    .catch((error) => {
    	throw error;
  	});
};

/*-- Lesson --*/
export async function lesson_category(token){  
	return fetch(constants.baseurl+'lesson/categories', {
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

export async function lesson_by_id(token, id, language){
	return fetch(constants.baseurl+'lesson/'+id+'?language='+language, {
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

export async function lesson_by_category(token, id, language){
	return fetch(constants.baseurl+'lesson/categories/'+id+'?language='+language, {
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

export async function lesson_list(token, id, page, idclass, language){  

	return fetch(constants.baseurl+'lesson', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer '+token
        },
        body: urlEncoded({          	
        	id: id,
            page: page,
            class: idclass,
            language: language
        })
    })
    .then((response) => {
        return response
    })
    .catch((error) => {
    	throw error;
  	});
};


/* INPUT */


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

export async function logout(token){
    return fetch(constants.baseurl+'user/logout', {
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

const urlEncoded = (formData)=>{
    return Object.keys(formData).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key])).join('&');
}