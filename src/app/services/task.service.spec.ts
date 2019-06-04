// import { TestBed } from '@angular/core/testing';
// import { SharedService } from './shared.service';
// import { HttpClient } from '@angular/common/http/src/client';

// describe('SharedService', () => {
//   let service: SharedService;
//   let httpClientSpy: { get: jasmine.Spy };
//   beforeEach(() => { 
//     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
//     service = new SharedService(<any>  httpClientSpy); });
//     TestBed.configureTestingModule({
//       providers: [SharedService]
//   });
//   // it('#getValue should return real value', () => {
//   //   expect(service.getValue()).toBe('real value');
//   // });
 
//   it('#getTask should return value from observable',
//     (done: DoneFn) => {
//       let task = {
//         Task_ID: 1,
//   TaskName: "Test task",
//   TaskEnded:true,
//   StartDate: Date.now(),
//   Priority: "50",
//   ParentTask: "Test",
//   EndDate:Date.now()
//       }
//     service.getTask('1').subscribe(value => {
//       expect(value).toEqual(task);
//       done();
//     });
//   });
// });



// // describe('SharedService', () => {
// //   beforeEach(() => TestBed.configureTestingModule({}));

// //   it('should be created', () => {
// //     const service: SharedService = TestBed.get(SharedService);
// //     expect(service).toBeTruthy();
// //   });
  
// // });
