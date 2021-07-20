import { BuildInfoService } from './../Services/build-info.service';
import { ComponentFixture, TestBed, async, tick, fakeAsync  } from '@angular/core/testing';
import { Observable, Observer } from 'rxjs';
import { AppUpdatesComponent } from './app-updates.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppUpdatesComponent', () => {
  let service: BuildInfoService;
  let component: AppUpdatesComponent;
  let fixture: ComponentFixture<AppUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUpdatesComponent ],
      providers: [BuildInfoService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
    service = TestBed.inject(BuildInfoService);
  });




  beforeEach(() => {
    fixture = TestBed.createComponent(AppUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function setup() {
    const fixture = TestBed.createComponent(AppUpdatesComponent);
    const app = fixture.debugElement.componentInstance;
    const userAsyncService = fixture.debugElement.injector.get(
      BuildInfoService
    );

    return { fixture, app, userAsyncService };
  }


  it('should create the app component', () => {
    const { app } = setup();
    expect(app).toBeTruthy();
  });


  it('should display user name', fakeAsync(() => {
    const { fixture, app, userAsyncService } = setup();
    const mockUser = [];
    spyOn(userAsyncService, 'getData').and.returnValue(
      Observable.create((observer) => {
        observer.next(mockUser);
        return observer;
      })
    );

    tick();

    fixture.detectChanges();
    const userAsyncElement = fixture.debugElement.nativeElement;
    const tableData = userAsyncElement.querySelector('table');
    expect(tableData).toBeTruthy();
  }));
});
