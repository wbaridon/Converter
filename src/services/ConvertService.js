import Api from '@/services/Api'

export default {
    getValue (from, to) {
        return Api().get(`latest?base=${from}&symbols=${to}`)
        .then(res => {
            return (res.data)
        }).catch(err => { console.log('Api is down') })
    }
}