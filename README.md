# geminiExtention
get help of ai without leaving the webpage.

## How to use:- 
select the question(Mainly mcq) then right click on Ask AI context menu and the gemini will give you the notification. The by default prompt is about giving the answer about a question but can be customised by the change in prompt variable in background.js file

## Steps to use this Extention on your local mechine:-

### Get API key 
[Gemini API key ](https://aistudio.google.com/app/apikey)


## To run Backend server on local mechine

### Step 1:- 
clone to your mechine

### Step 2:-
open the backend dir/folder in terminal and run `npm init` and then run `npm i`

### Step 3:-
create a file named :- `.env` and then type `API_KEY = "Paste your api key here"`.

### Step 4:-
run your server at 3000 by pasting `node server.js` in the terminal.

#### Backend is now running

## For the extention part
open chrome and in url paste `chrome://extensions/` .  And then enable developer mode. Then click on the Load unpacked option. Then select the extention folder. 
#### And All set yehh

## You can edit see and edit the prompt in the background.js file in extention dir/folder where prompt is declared.
### the answer is currently shows only in notification but i will add a popup type of feature in future...
