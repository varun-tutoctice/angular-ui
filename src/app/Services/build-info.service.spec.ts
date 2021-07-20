import { environment } from './../../environments/environment';
import { TestBed } from '@angular/core/testing';

import { BuildInfoService } from './build-info.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('BuildInfoService', () => {
  let service: BuildInfoService;
  let url = environment.serviceUrl;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildInfoService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BuildInfoService);

  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  function setup() {
    const sharedService = TestBed.get(BuildInfoService);
    const httpTestingController = TestBed.get(HttpTestingController);
    return { sharedService, httpTestingController };
  }

  it('should call the build information data', () => {
    const { sharedService, httpTestingController } = setup();
   // const mockGoogleMapData = {id: 1, country : 'United states of america', zipcode: '56743'};
    sharedService.getData().subscribe(data => {
      expect(data).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${url}?filter[where][type]=BuildDeployment`);

    expect(req.request.method).toBe('GET');

    // req.flush({
    //   mapData: mockGoogleMapData
    // });
  });
});
