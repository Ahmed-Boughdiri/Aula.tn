
export default function(ch, limit) {
    if(ch.length < limit) {
        return ch
    } else {
        return ch.slice(0,limit) + "...";
    }
}
