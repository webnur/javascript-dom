function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'please provide an array'
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }

    return mega;
}

const friends = ['sabbir', 'kabir hossain', 'sohel', 'amena', 'tanjila', 'sumon'];
const myBigBuddy = megaFriend(friends)
//console.log(myBigBuddy);


// indexOF
if(friends.indexOf('sohel') != -1){
    // console.log('sohel is exists');
}


// includes
if(friends.includes('sohel')){
    console.log('amar bondu sohole exists hoiche');
}

// concat 
const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8, 9]
const combind = first.concat(second)
console.log(combind)