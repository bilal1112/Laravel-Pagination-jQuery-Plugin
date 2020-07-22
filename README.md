# Laravel-Pagination
Laravel pagination without refresh jQuery plugin
### Getting Started
#### Installation
Add script file in your code

     <script src="/path/to/paginate.min.js"></script>
#### Usage
put your code section where you want to apply pagination in partial view and include that view in parent blade file
wrap up your include view with div and given an id attribute

#### Example

in parent view

    <div id='list'>
       @include('child')
    </div>
    
in child view

    <div class="table-responsive">          
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
          @foreach($users as $user)
            <tr>
              <td>{{$user->id}}</td>
              <td>{{$user->first_name}}</td>
              <td>{{$user->last_name}}</td>
            </tr>
          @endforeach
        </tbody>
      </table>
    </div>
    {{$users->links()}}
    
Call Laravel paginate plugin

       $('#list').paginate();
       
in controller function change the return value like this:

        public function index(Request $request){
          // code goes here

          if ($request->ajax()) {
              return response()->json(view('child',$users)->render(),200);
          }

          return view('parent', $users);
        }

#### Demo
![enter image description here](https://github.com/bilal1112/Laravel-Pagination-jQuery-Plugin/blob/master/demo.gif)
