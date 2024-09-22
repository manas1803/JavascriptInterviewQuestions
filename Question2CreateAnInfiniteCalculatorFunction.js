// Question create the following function cal(2).add(3).add(1).sub(3).mul(2).val()

function cal(num){
    return {
        add:function(n){
            num=num+n
            return this;
        },
        sub:function(n){
            num=num-n;
            return this;
        },
        mul:function(n){
            num=num*n;
            return this;
        },
        val:function(){
            return num;
        }
    }
}

const sol = cal(2).add(3).add(1).sub(3).mul(2).val()
console.log(sol)