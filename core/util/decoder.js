class Decoder{

     

    static decodeUrl(string){
        try
        {
            return decodeURIComponent(string);
        }catch(e){
          console.log(e);
        }
        
    }
    static encodeUrl(string){
        return encodeURIComponent(string);
    }

    static decreptCypher(a) {

        const fs = {
            Q2: function (a, b) {
                a.splice(0, b)
            }, 
            cK: function (a) {
                a.reverse()
            }, 
            yy: function (a, b) {
                var c = a[0];
                a[0] = a[b % a.length];
                a[b] = c
            }
        }

        a = a.split("");
        fs.yy(a, 40);
        fs.Q2(a, 3);
        fs.yy(a, 53);
        fs.yy(a, 11);
        fs.Q2(a, 3);
        fs.cK(a, 8);
        fs.Q2(a, 3);
        fs.yy(a, 16);
        fs.cK(a, 75);
    return a.join("");

    }

}

module.exports=Decoder;