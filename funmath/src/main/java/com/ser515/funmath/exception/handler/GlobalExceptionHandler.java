package com.ser515.funmath.exception.handler;

/*import org.slf4j.Logger;
import org.slf4j.LoggerFactory;*/
import org.springframework.beans.TypeMismatchException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingPathVariableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
	// private static final Logger log =
	// LoggerFactory.getLogger(GlobalExceptionHandler.class);

	@Override
	protected ResponseEntity<Object> handleHttpRequestMethodNotSupported(HttpRequestMethodNotSupportedException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		// TODO Auto-generated method stub

		ExceptionResponseTemplate responseTemplate = new ExceptionResponseTemplate(ex.getMessage(), status);
		return new ResponseEntity<Object>(responseTemplate, headers, status);
	}

	@Override
	protected ResponseEntity<Object> handleMissingPathVariable(MissingPathVariableException ex, HttpHeaders headers,
			HttpStatus status, WebRequest request) {
		// TODO Auto-generated method stub
		// return super.handleMissingPathVariable(ex, headers, status, request);

		ExceptionResponseTemplate responseTemplate = new ExceptionResponseTemplate(ex.getMessage(), status);
		return new ResponseEntity<Object>(responseTemplate, headers, status);
	}

	@Override
	protected ResponseEntity<Object> handleTypeMismatch(TypeMismatchException ex, HttpHeaders headers,
			HttpStatus status, WebRequest request) {
		// TODO Auto-generated method stub
		// return super.handleTypeMismatch(ex, headers, status, request);
		ExceptionResponseTemplate responseTemplate = new ExceptionResponseTemplate(ex.getMessage(), status);
		return new ResponseEntity<Object>(responseTemplate, headers, status);
	}

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		// TODO Auto-generated method stub
		// return super.handleMethodArgumentNotValid(ex, headers, status, request);
		ExceptionResponseTemplate responseTemplate = new ExceptionResponseTemplate(ex.getMessage(), status);
		return new ResponseEntity<Object>(responseTemplate, headers, status);
	}

	@Override
	protected ResponseEntity<Object> handleExceptionInternal(Exception ex, Object body, HttpHeaders headers,
			HttpStatus status, WebRequest request) {
		// TODO Auto-generated method stub
		// return super.handleExceptionInternal(ex, body, headers, status, request);
		ExceptionResponseTemplate responseTemplate = new ExceptionResponseTemplate(ex.getMessage(), status);
		return new ResponseEntity<Object>(responseTemplate, headers, status);
	}

	@ExceptionHandler(value = Exception.class)
	public ResponseEntity<Object> handleNoSuchElementException(Exception ex, Object body, HttpHeaders headers,
			HttpStatus status, WebRequest request) {
		// TODO Auto-generated method stub
		// return super.handleExceptionInternal(ex, body, headers, status, request);
		ExceptionResponseTemplate responseTemplate = new ExceptionResponseTemplate(ex.getMessage(), status);
		return new ResponseEntity<Object>(responseTemplate, headers, status);
	}

}
