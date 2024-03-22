import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { news } from './news';
@Injectable({
  providedIn: 'root'
})
export class WebapiService implements InMemoryDbService {
  createDb() {
    const mynews = [
      {
        id: 1,
        titles: "SROs must promote a culture of compliance among members, says RBI",
        description: "“Encourage a culture of research and development within the sector to encourage innovation while ensuring the highest standards of compliance and self-governance,” the framework said while listing the objectives of an SRO.",
        cateogry: "finance",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id: 2,
        titles: "PE, VC investments fall to USD 2.2 bn in Feb as big-ticket deals dry up",
        description: "Private equity and venture capital investments in February totaled USD 2.2 billion, down 39% from the previous year. The month saw 120 deals, surpassing January and February 2023, with notable investments in Byju's and iBus Network.",
        cateogry: "finance",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id: 3,
        titles: "Lending rates to start easing only in second half of FY'25: Report",
        description: "Bank deposit rates are unlikely to rise further. But the structural shift in the system will keep downward rigidity intact. Hence, banks’ lending rate is expected to remain high in FY’25 with some modest softening towards the end.",
        cateogry: "finance",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id: 4,
        titles: "Govt contemplating changes in SARFAESI, DRT laws; to provide legal sanctity to e-notices",
        description: "The Finance Ministry has set up a panel to propose amendments to the SARFAESI and DRT Acts, aiming to expedite debt recovery. E-notices were to be granted legal sanctity for faster recovery. Meetings were held, discussing enhancements to DRTs for efficient debt recovery.",
        cateogry: "finance",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id: 5,
        titles: "I-T recovers ₹73,500 cr in pending bills",
        description: "The income tax department has recovered ₹73,500 crore of pending dues in the current financial year up to March 15, with corporate tax dues amounting to ₹56,000 crore, personal income tax at ₹16,500 crore, and undisclosed income from foreign assets at ₹50 crore. The recovery is part of a targeted plan to increase",
        cateogry: "finance",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:6,
        titles:"As Dhoni passes the baton again, CSK say they are better prepared",
        description:"In 2022, MSD decided to relinquish captaincy and let Ravindra Jadeja take charge. After only two wins in eight games, Jadeja stepped down",
        cateogry:"sports",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:7,
        titles:"Andy Murray Beats Dizzy Matteo Berrettini; Sloane Stephens, Naomi Osaka advance",
        description:"Two-time Miami Open champion Andy Murray fought back for a 4-6, 6-3, 6-4 win over struggling Italian Matteo Berrettini in the first round at Hard Rock Stadium on Wednesday. Berrettini needed medical attention near the end of the second set after appearing to almost faint on court but he battled on. The Italian recently returned to the tour after an injury-plagued 2023, reaching the final of a Challenger event in Phoenix. He broke Murray's serve in the first game of the match and was in firm control of the opening set.",
        cateogry:"sports",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:8,
        titles:"Court Rules Robinho Must Serve Gang Rape Sentence In Brazil",
        description:"The court ruled by nine votes to two in favor of an Italian request that Robinho serve his sentence in his home country after he was found guilty of taking part in the gang rape of an Albanian woman",
        cateogry:"sports",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:9,
        titles:"Avani Prashanth Finishes 10th As Chinese Taipei Golfer Is Crowned Champion",
        description:"India's Avani Prashanth registered her fourth straight under par round with a one-under 71 to sign off tied 10th, her best finish in the Women's Amateur Asia-Pacific Championships",
        cateogry:"sports",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:10,
        titles:"PV Sindhu, Kidambi Srikanth, Lakshya Sen Progress To Second Round Of Swiss Open",
        description:"PV Sindhu, Lakshya Sen and Kidambi Srikanth produced impressive performances to progress to the second round of the Swiss Open super 300 badminton tournament.",
        cateogry:"sports",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:11,
        titles:"Arvind Kejriwal Arrested | First Visuals Of Kejriwal After Arrest | CM Kejriwal Reaches ED Office",
        description:"Delhi CM Arvind Kejriwal arrives at the ED Headquarters after Enforcement Directorate team arrested him in the Excise Policy Case.",
        cateogry:"politics",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:12,
        titles:"Centre's 'fact-checking unit' notification stayed by Supreme Court",
        description:"The Supreme Court on Thursday stayed a government notification of March 20 establishing a fact-checking unit to verify news items appearing in the media about the government.",
        cateogry:"politics",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:13,
        titles:"SC rejects plea for stay on appointment of new election commissioners",
        description:"The Supreme Court on Thursday dismissed applications seeking a stay on the appointment of two new election commissioners, saying it would lead to chaos and uncertainty as the elections are round the corner.",
        cateogry:"politics",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:14,
        titles:"Long Weekend: Airfares, hotel rates shoot up ahead of Holi, Good Friday",
        description:"As March draws to a close, two consecutive long weekend opportunities – Holi and Good Friday – are driving up hotel occupancy and airfares across major routes.",
        cateogry:"politics",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      },
      {
        id:15,
        titles:"SBI submits all electoral bond details, including unique numbers, to ECI",
        description:"The State Bank of India (SBI), through its Chairman Dinesh Kumar Khara, told the Supreme Court on Thursday that it has submitted complete details of electoral bonds, including the ‘unique alpha-numeric’ details of bonds, to the Election Commission of India (ECI).",
        cateogry:"politics",
        publictiondate: "21 / 2 / 24",
        author:"abc"
      }
    ]
    return {mynews};
  }
  genId(mynews:news[]):number{
    return mynews.length>0?Math.max(...mynews.map(news=>news.id))+1:1;
  }
}
