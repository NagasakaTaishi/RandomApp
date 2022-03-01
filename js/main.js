'use strict';

{
  const first = document.getElementById('pressed first');

  first.addEventListener('click', () => {
    const results = ['すきなもの', 'くに、まち', 'たべもの', 'アニメ'];
    
    first.textContent = results[Math.floor(Math.random() * results.length)];

  });


  const second = document.getElementById('pressed second');

  second.addEventListener('click', () => {
    const results = ['にほんご', 'やすみのひ', 'りょこう', 'かぞく'];
    
    second.textContent = results[Math.floor(Math.random() * results.length)];

  });


  const third = document.getElementById('pressed third');

  third.addEventListener('click', () => {
    const results = ['ともだち', 'がっこう', 'しごと', 'どうぶつえん'];
    
    third.textContent = results[Math.floor(Math.random() * results.length)];

  });


  const fourth = document.getElementById('pressed fourth');

  fourth.addEventListener('click', () => {
    const results = ['スポーツ', 'おんがく', 'しょうらい', 'けっこん'];
    
    fourth.textContent = results[Math.floor(Math.random() * results.length)];

  });


  
}