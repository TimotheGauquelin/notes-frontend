import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],

})

export class NotesListComponent implements OnInit {

 notes: Note[] = new Array<Note>(); 

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    // We want to retrieve all notes from NotesService
    this.notes = this.notesService.getAll();
  }

  deleteNote(id: number) {
    this.notesService.delete(id);
  }
}