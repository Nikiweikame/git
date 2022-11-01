function end(input) {
    return (Number(input) !== 0 ?("照常播放電影"):("今天不播放電影"))
  };
  
console.log(end(0))

module.exports = end;