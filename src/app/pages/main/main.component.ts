import { Component, OnInit } from '@angular/core';
import { StoryItem } from '@app/shared/models/storyItems.model';
import { SharedModule } from '@app/shared/modules/shared/shared.module';
import { NewsService } from '@app/shared/services/news.service';
import { SharedService } from '@app/shared/services/shared.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  storyIds: number[] = []
  storeItems: StoryItem[] = []
  isLoading = false
  filter: string;

  constructor(
    private newsService: NewsService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.newsService.getTopStoriesIds().subscribe((ids) => {
      this.storyIds = ids;
      if(this.storyIds.length){
        this.getStories()
      }
    })
    this.sharedService.getSearchText().subscribe(text => this.filter = text)
  }
  


   async getStories(){
    this.storeItems = [];
    const itemIds: number[] = this.getTenRandomIds();
    for (const id of itemIds) {
        let storyItem: StoryItem
         await this.newsService.getStoryItemById(id).then(async (item) => {
            storyItem = item
           await this.newsService.getStoryAuthor(item.by).then(author => {
            storyItem.author = author


            storyItem.image = `assets/images/${this.getRandomImage()}.jpg`
            this.storeItems.push(storyItem)
            this.storeItems = this.storeItems.sort((a,b) => a.score  - b.score);
           }).catch(error => {
            console.log(error)
           })
         }).catch(error => {
           console.log(error)
         }) 
    }
  }

  getRandomImage(){
    return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  }

  getTenRandomIds(): number[] {
   let randomIds: number[] = []
    do {
      var randomId = this.storyIds[Math.floor(Math.random() * this.storyIds.length)];
      // check duplicate ids
      if(!randomIds.some(ids => ids == randomId)){
        randomIds.push(randomId)
      }
    } while(randomIds.length < 10)
    console.log(randomIds)
    return randomIds
  }

}
