var app = new Vue({
    el: '#app',
    data: {
      currentmode:'',
      WinnerExample:'09837462561',
      khananumber:'',
      Cashwinnerlist:[],
      TVwinnerlist:[],
      FTTHwinnerlist:[],
      hiddencashwinner:[]
    },
    methods: {
        modecash(){
            this.currentmode='cash';
        },
        modeTV(){
            this.currentmode='TV';
        },
        modeFTTH(){
            this.currentmode='FTTH';
        },
        deletecashwinner(index){
            this.Cashwinnerlist.splice(index,1);
        },
        deletetvwinner(index){
            this.TVwinnerlist.splice(index,1);
        },
        deleteftthwinner(index){
            this.FTTHwinnerlist.splice(index,1);
        },
        deletenumber(){
            if (this.currentmode=='cash') {
                this.Cashwinnerlist.pop();
                this.khananumber='';
            } else if (this.currentmode=='TV'){
                this.TVwinnerlist.pop();
                this.khananumber='';
            } else if (this.currentmode=='FTTH') {
                this.FTTHwinnerlist.pop();
                this.khananumber='';
            } else {
                
            }
        },
        DrawNumber(){
            if (this.currentmode=='cash') {
                this.khananumber=this.WinnerExample;
                console.log(this.khananumber);
                this.WinnerExample= this.WinnerExample.substring(0, 5) + '***' + this.WinnerExample.substring(8,11);
                this.Cashwinnerlist.push(this.WinnerExample);
                this.WinnerExample='09123456789';
            } else if (this.currentmode=='TV'){
                this.khananumber=this.WinnerExample;
                console.log(this.khananumber);
                this.WinnerExample= this.WinnerExample.substring(0, 5) + '***' + this.WinnerExample.substring(8,11);
                this.TVwinnerlist.push(this.WinnerExample);
                this.WinnerExample='09374656385';
            } else if (this.currentmode=='FTTH') {
                this.khananumber=this.WinnerExample;
                console.log(this.khananumber);
                this.WinnerExample= this.WinnerExample.substring(0, 5) + '***' + this.WinnerExample.substring(8,11);
                this.FTTHwinnerlist.push(this.WinnerExample);
                this.WinnerExample='09785937645';
            } else {
                
            }
            
            
        }
    },
    mounted(){
   
     
        
    },
    computed:{
        isDisabled: function(){
            return !this.khananumber;
        }

    }
  })