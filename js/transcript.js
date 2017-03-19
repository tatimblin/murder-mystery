var msgCount = 0;
var suspectCount = 0;

var transcript = [];

//Alice's interrogation transcript
transcript[0] = {
    cop: ["What was your role at Raytheon Technologies?", "Was that your only job? Some people seem to think your level of involvement in the company was more than just that.", "Were you aware of any new chemicals being created in the labs?", "So you knew who he was planning to have takeover the company when he retired?", "How do you know that he was writing who his replacement would be?"],
    sus: ["I was the assistant to Robert.", "Robert trusted me, he knows I’m well educated. It’s natural for an assistant to have access to company information. I’m involved in Roberts affairs so naturally I knew about what was going on in the company.", "I was never involved with the workings of the lab, I helped Robert with the broader scope.", "Robert was always secretive about that, but I believe he had made his choice. One day I walked in on him writing something on a piece of paper, when he saw me he immediately hid it.", "I know Robert and he never writes unless it’s a speech, I do all of his writing for him and that’s all typewriter. He didn’t have any speeches to write except the one about his retirement."]
};
//Theodore's interrogation transcript
transcript[1] = {
    cop: ["MAlice", "Alice", "Simon", "Everyone"],
    sus: ["MAlice", "Alice", "Simon", "Everyone"]
};
//Edwin's interrogation transcript
transcript[2] = {
    cop: ["MAlice", "Alice", "Simon", "Everyone"],
    sus: ["MAlice", "Alice", "Simon", "Everyone"]
};
//William's interrogation transcript
transcript[3] = {
    cop: ["What was your role at Raytheon Technologies?", "What does that mean?", "Why would things need to be done discreetly?", "A lot of people at this company don’t trust you because of answers like that.", "Well people get suspicious of those close to the boss, especially when the boss ends up dead.", "How close were you to Robert?", "Apparently?"],
    sus: ["I helped Robert with anything he needed done right.", "Sometimes in business things need to be done discreetly, that’s where I came in.", "That’s Robert’s business.", "That’s their business, I’ve never done anything to wrong them.", "People or you?", "Robert trusted me with a lot on the business side of his life, but personally we were about as distant as strangers, apparently.", "Robert only cared about himself and he made that clear to me."]
};
//Simon's interrogation transcript
transcript[4] = {
    cop: ["MAlice", "Alice", "Simon", "Everyone"],
    sus: ["MAlice", "Alice", "Simon", "Everyone"]
};

function whosActive() {
    msgCount = 0;
    if ( $( ".active" ).is( ".tt" ) ) {
        suspectCount = 1;
        console.log('Ted - suspectCount was updated: ' + suspectCount);
    }
    if ( $( ".active" ).is( ".sd" ) ) {
        suspectCount = 4;
        console.log('Simon - suspectCount was updated: ' + suspectCount);
    }
    if ( $( ".active" ).is( ".eb" ) ) {
        suspectCount = 2;
        console.log('Edwin - suspectCount was updated: ' + suspectCount);
    }
    if ( $( ".active" ).is( ".wh" ) ) {
        suspectCount = 3;
        console.log('Will - suspectCount was updated: ' + suspectCount);
    }
    if ( $( ".active" ).is( ".ar" ) ) {
        suspectCount = 0;
        console.log('Alice - suspectCount was updated: ' + suspectCount);
    }
}

//$("#1").html(transcript[0].cop[0]);
//$("#2").html(transcript[0].sus[0]);
$(".3").html(transcript[suspectCount].cop[0]);
$(".4").html(transcript[suspectCount].sus[0]);

$('.transcript-next').on('click',function(){
    console.log('The suspect is: ' + suspectCount);
	var cop = transcript[suspectCount].cop[msgCount];
	var sus = transcript[suspectCount].sus[msgCount];
	if (transcript[0].cop.length > msgCount && transcript[0].sus.length > msgCount) {
	
		cop1 = transcript[suspectCount].cop[msgCount];
		sus2 = transcript[suspectCount].sus[msgCount];
		cop3 = transcript[suspectCount].cop[msgCount + 1];
		sus4 = transcript[suspectCount].sus[msgCount + 1];

		$(".1").html(cop1);
		$(".2").html(sus2);
		$(".3").html(cop3);
		$(".4").html(sus4);
        
        msgCount++
	}
	console.log(msgCount);
});

$('.transcript-prev').on('click',function(){ 
	if (msgCount >= 1) {
        msgCount--
       
        cop1 = transcript[suspectCount].cop[msgCount];
        sus2 = transcript[suspectCount].sus[msgCount];
        cop3 = transcript[suspectCount].cop[msgCount + 1];
        sus4 = transcript[suspectCount].sus[msgCount + 1];

        $(".1").html(cop1);
        $(".2").html(sus2);
        $(".3").html(cop3);
        $(".4").html(sus4);
	}
	console.log(msgCount);
});