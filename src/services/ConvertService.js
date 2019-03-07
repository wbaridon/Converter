import Api from '@/services/Api'

export default {
    getValue (from, to, amount) {
        return Api().get(`/convert?
        access_key=${process.env.VUE_APP_CURRENCY_API_KEY}&from=${from}&to=${to}&amount=${amount}`)
        .then(res => {
            return (res.data)
        })
    }
}