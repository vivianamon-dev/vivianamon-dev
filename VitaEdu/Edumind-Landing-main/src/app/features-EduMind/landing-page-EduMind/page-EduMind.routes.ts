// auth.routes.ts
//aqui estamos dicendo que esta seccion va tener su propio mapeo interno muy independiente el del global 
import { Routes } from "@angular/router";
import { HomeEduMindComponent } from "./home-edu-mind/home-edu-mind.component";
import { TeemEduMindComponent } from "./teem-edu-mind/teem-edu-mind.component";
import { ContactEduMindComponent } from "./contact-edu-mind/contact-edu-mind.component";
import { TestEduMindComponent } from "./test-edu-mind/test-edu-mind.component";
import { QuestionsEduMindComponent } from "./questions-edu-mind/questions-edu-mind.component";
import { DocsEduMindComponent } from "./docs-edu-mind/docs-edu-mind.component";



export const PageRoutes: Routes = [
    {
        path: 'landing',
        children: [
            { path: '', redirectTo: 'Home-VitaEdu', pathMatch: 'full' },
            { path: 'Home-VitaEdu', component:  HomeEduMindComponent},
            { path: 'Teem-VitaEdu', component:  TeemEduMindComponent},
            { path: 'Contact-VitaEdu', component:  ContactEduMindComponent },
            { path: 'Test-VitaEdu', component:   TestEduMindComponent},
            { path: 'Questions-VitaEdu', component:   QuestionsEduMindComponent},
            { path: 'Docs-VitaEdu', component:   DocsEduMindComponent}
        ]
    }
]

