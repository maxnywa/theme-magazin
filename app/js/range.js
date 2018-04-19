let range = $("#slider-range");

function changeMinMaxVal(event, ui) { 
  let firsthandle = range.slider( "option" ,"firsthandle").find('.min-value'),
      secondhandle = range.slider( "option" ,"secondhandle").find('.max-value'); 
  $(firsthandle).text('$' + ui.values[ 0 ]);    
  $(secondhandle).text('$' + ui.values[ 1 ]);}
  
function onCreateRange(event, ui) {    
  let state = range.slider( "option" ),        
      target = $(event.target),        
      handles = target.find('.ui-slider-handle'),        
      firsthandle = $(handles[0]),        
      secondhandle =  $(handles[1]); 

  range.slider( "option" ,"firsthandle", firsthandle );        
  range.slider( "option" ,"secondhandle", secondhandle ); 

  firsthandle.append('<span class="min-value">'+ state.values[0] +'$</span>');    
  secondhandle.append('<span class="max-value">'+ state.values[1] +'$</span>');
}
  
range.slider({
  range: true,
  min: 0,
  max: 1000,
  values: [ 0, 600 ],
  create: onCreateRange,
  slide: changeMinMaxVal
});