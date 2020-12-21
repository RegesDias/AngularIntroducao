import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: 'course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    
    course: Course;
    
    constructor( private ActivatedRout: ActivatedRoute, private courseService: CourseService ){}
        

    ngOnInit(): void{
        this.courseService.retrieveId(+this.ActivatedRout.snapshot.paramMap.get('id')).subscribe({
            next: course => {
                course = this.course = course;
            },
            error: err => console.log('Error: ',err)
        });
    }
    save(): void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Sucesso ',course),
            error: error => console.log('Error ',error),
        })
    }
}