import axios from 'axios';

export const signUpAction = (data, value) => {
    return {
        type: 'SET_SIGN_UP', data, value
    }
}

export const signUpAPI = async (form) => {
    console.log('FORM SIGN UP: ', form);
    const data = new FormData()
    data.append('fullname', form.fullname)
    data.append('email', form.email)
    data.append('password', form.password)

    try {

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'multipart/form-data'
            }
          };

        let res = await axios.post('http://localhost:5000/auth/register', data, config)

        console.log(`RES: `, res);
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }

}