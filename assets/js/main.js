const app = Vue.createApp({
    data(){
        return{
            FormData1:{
                date: ''
            },
            FormData2:{
                roman_day: '',
                roman_month: '',
                roman_year: ''
            },
            response1: null,
            response2: null,
            dateValidity: null
        }
    },
    methods: {
        fetchRoman() {
            axios.post('http://127.0.0.1:8000/api/date_to_roman', this.FormData1)
                .then(response => {
                    this.response1 = response.data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        fetchNumber() {
            axios.post('http://127.0.0.1:8000/api/roman_to_date', this.FormData2)
                .then(response => {
                    this.response2 = response.data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        // checkDate(){
        //     const responseDate = this.response2.date;
        //     // const date = parseISO(responseDate);
        //     let dateObj = new Date(responseDate);
        //     // this.dateValidity = isValid(date);
        //     if (dateObj === 'Invalid Date'){
        //         this.dateValidity = false;
        //     }
        //     this.dateValidity = true;
            
        // }
    },
    // watch:{
    //     response2(val){
    //         if (val) {
    //             this.checkDate();
    //         }
    //     }
    // }
})