# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<h1>THE GOAL</h1>
I have always wanted to make a sort of notebook/ productivity tracker and what better way to impliment this than through a 'Patient Tracker'. Coral Villa Adult Care wants me to create a way for the owner to keep track of some really specific information like how often the patients use the bathroom, any pain they have and for how low, new - one off - medications that get added for an infection or just general medical troubleshooting. Im not totally sure on how im going to structure the data/ functionality. 


<h1>THE PROCESS</h1>
In terms of patients, im thinking of an object that can contain the patients and each patient is an object that contains basic information that youd need to fill in. From there im thinking that the owner can decide what 'trackers' she wants to add. For example, id make a pretty basic bathroom tracker that might just be a calender you can mark. If the owner wants the tracker for four out of six patients, she can choose who. Same with additional medication that gets added. If one patient gets a one off antibiotic, the owner can add that specific tracker to that patients tab. This would be nice because then i can build all the trackers seperatly and make them available in the main tab. I also think id utilize a grid seeing that this will be a desktop only application as of right now. A grid will also make it easier to determine where exactly each component / 'tracker' will go based on their size.


<h1>WHAT I LEARNED</h1>
im learning more about CRUD which i feel is absolutely essential. I would really like to deepen this app by adding Node js. I am very new to venturing out past front end but id really like to try my hand at digging into the back end a bit to actually integrate CRUD. 
